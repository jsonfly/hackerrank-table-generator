from psycopg2 import sql

import data_manager


def get_data(table_names, limit):
    data = {}
    for table_name in table_names:
        query = sql.SQL('SELECT * FROM {table_name} LIMIT {limit}') \
            .format(
            table_name=sql.Identifier(table_name),
            limit=sql.SQL(limit)
        )
        data[table_name] = data_manager.execute_select(query)
    return data
