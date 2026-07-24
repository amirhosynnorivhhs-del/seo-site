from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>سلام، سایت لینک‌دونی روبیکا آماده است.</h1>"

app.run(host="0.0.0.0", port=5000, debug=True)