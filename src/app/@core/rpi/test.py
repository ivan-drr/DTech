import pymongo
import RPi.GPIO as gpio

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["dtech"]
mycol = mydb["room"]

room = mycol.find_one({"name": "salon"})

if room:
    gpio.setmode(gpio.BOARD)
    gpio.setup(12, gpio.OUT)
    gpio.output(12, room["state"])
