import pandas as pd
import psycopg2
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
import sqlalchemy
from flask import Flask, request, render_template
import os

# Heroku check
is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

# Flask

# SQL Alchemy

# Postgres connector

# Pandas

# JSON
# import json
# Import your config file(s) and variable(s)
if is_heroku == False:
    from config import db_endpoint, db_port, db_username, db_password, db_name
else:
    db_endpoint = os.environ.get('db_endpoint')
    db_port = os.environ.get('db_port')
    db_username = os.environ.get('db_username')
    db_password = os.environ.get('db_password')
    db_name = os.environ.get('db_name')


# Configure MySQL connection and connect
# dart -- change this to postgres
# pymysql.install_as_MySQLdb()

engine = create_engine(
    f"postgres://{db_username}:{db_password}@{db_endpoint}:{db_port}/{db_name}")
conn = engine.connect()

# Initialize Flask application
app = Flask(__name__)

# # Set up SQL Alchemy connection and classes
# Base = automap_base() # Declare a Base using `automap_base()`
# Base.prepare(engine, reflect=True) # Use the Base class to reflect the database tables
# Base.classes.keys() # Print all of the classes mapped to the Base
# print(Base.classes.keys())
# FIPS = Base.classes.FIPS # Assign the client_info class (table) to a variable called `ClientInfo`
# session = Session(engine) # Create a session

# Set up your default route
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/data/fips')
def getData():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"FIPS\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/access')
def access():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Access\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/assistance')
def assistance():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Assistance\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/health')
def health():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Health\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/insecurity')
def insecurity():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Insecurity\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/local')
def local():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Local\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/prices')
def prices():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"PRICES_TAXES\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/variables')
def variables():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"Variables\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/county')
def county():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"county\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


@app.route('/api/data/restaurants')
def restaurants():
    # Establish DB connection
    conn = engine.connect()
    try:
        data = pd.read_sql("SELECT * FROM \"restaurants\" ", conn)
        return data.to_json(orient='records')
    except Exception as e:
        print(e)
        return render_template('error.html', error=True)


if __name__ == "__main__":
    app.run(debug=True)
