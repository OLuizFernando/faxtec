# ===================================================
#                   IMPORTS SECTION
# ===================================================

# Standard library imports
import os

# Third-party libraries
from dotenv import load_dotenv
from flask import Flask, flash, redirect, render_template, request, session
from werkzeug.security import check_password_hash, generate_password_hash

# Local imports
from helpers import login_required, db_execute


# ===================================================
#                FLASK CONFIGURATION
# ===================================================

load_dotenv()

app = Flask(__name__)

# Database configuration using environment variables
app.config["DATABASE"] = {
    "host": os.getenv("DBHOST"),
    "dbname": os.getenv("DBNAME"),
    "user": os.getenv("DBUSER"),
    "password": os.getenv("DBPASSWORD")
}


# ===================================================
#                ROUTE HANDLERS
# ===================================================

@app.route("/")
def index():
    return render_template("index.html")


# ===================================================
#                ERROR HANDLERS
# ===================================================

@app.errorhandler(404)
def page_not_found(error):
    return render_template("errors/404.html"), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return render_template('errors/405.html'), 405


@app.errorhandler(500)
def internal_server_error(error):
    return render_template('errors/500.html'), 500
    

# ===================================================
#                APP RUN CONFIGURATION
# ===================================================

if __name__ == "__main__":
    app.run(debug=True)
#           ^^^^^^^^^^ REMOVE THIS PARAMETER IN PRODUCTION