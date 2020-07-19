import RPi.GPIO as gpio
import sys
import pymongo

def changeLight():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["dtech"]
    mycol = mydb["room"]

    room = mycol.find_one({"name": sys.argv[1]})

    if room:
        gpio.setmode(gpio.BOARD)
        gpio.setup(12, gpio.OUT)
        gpio.output(12, room["state"])

    return gpio.input(12) == room["state"]

if __name__ =='__main__' :
    changeLight = changeLight()
