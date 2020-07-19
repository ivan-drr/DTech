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
        if gpio.input(12) == room["state"]:
            print(True)
            sys.stdout.flush()
            return True
        else:
            gpio.output(12, room["state"])
            print(gpio.input(12) == room["state"])
            sys.stdout.flush()
            return gpio.input(12) == room["state"]
    print(False)
    sys.stdout.flush()
    return False

if __name__ =='__main__' :
    changeLight = changeLight()
