from flask import Flask, render_template, request

import queries

app = Flask(__name__)


@app.route('/')
def generator():
    table_names = request.args.get('table_names').split(',')
    limit = request.args.get('limit', 'ALL')

    data = queries.get_data(table_names, limit)
    return render_template('table.html', data=data)


if __name__ == '__main__':
    app.run()
