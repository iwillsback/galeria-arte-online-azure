import logging
import os
import json
import azure.functions as func
import pyodbc 


app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)


@app.route(route="GetObrasFunction", auth_level=func.AuthLevel.ANONYMOUS)
def GetObrasFunction(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    
    try:
        
        connection_string = os.environ["DbConnectionString"]
    except KeyError:
        return func.HttpResponse(
             "DbConnectionString não configurada. Verifique App Settings no Azure ou local.settings.json",
             status_code=500
        )

    obras = []
    conn = None 
    cursor = None
    try:
        
        conn = pyodbc.connect(connection_string)
        cursor = conn.cursor()
        
        
        query = "SELECT Nome, Artista, Descricao, URLImagem FROM Obras;"
        cursor.execute(query)
        
        
        columns = [column[0] for column in cursor.description]
        for row in cursor.fetchall():
            obra = dict(zip(columns, row))
             
            for key, value in obra.items():
                if isinstance(value, str):
                    obra[key] = value.strip()
            obras.append(obra)

    except pyodbc.Error as ex:
        logging.error(f"Erro do pyodbc/SQL Server: {ex}")
        
        return func.HttpResponse(
             f"Erro interno do servidor ao carregar dados do SQL: {ex}",
             status_code=500
        )
    finally:
        
        if cursor: cursor.close()
        if conn: conn.close()

    
    headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type"
    }

    return func.HttpResponse(
        json.dumps(obras, ensure_ascii=False),
        mimetype="application/json",
        status_code=200,
        headers=headers
    )