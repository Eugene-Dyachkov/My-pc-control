import asyncio
import websockets
import pyautogui as pg
def command_processing(comand: str):
    if comand =="hello!":
        pass
    elif comand =="power":
        pg.hotkey('ctrlleft', 'altleft', 'del')
    elif comand =="out":
        pg.press('esc')
    elif comand =="brikUP":
        pg.hotkey('fn','f5')
    elif comand =="volumeUp":
        pg.hotkey('fn','volumeup')
    elif comand =="brigDown":
        pg.hotkey('fn','f4')
    elif comand =="volumeDown ":
        pg.hotkey('fn','volumedown')
    elif comand =="arrUp":
        pg.press('up')
    elif comand =="arrLeft":
        pg.press('left')
    elif comand =="arrPause":
        pg.press('space')
    elif comand =="arrRight":
        pg.press('right')
    elif comand =="arrDown":
        pg.press('down')
    elif comand =="enter":
        pass
    elif comand =="window":
        pg.press('win')

async def new_client(client_socket, path):
    print("New client")
    while True:
        try:
            comand = await client_socket.recv()
            await command_processing(comand)
        except:
            pass

async def start_server():
    await websockets.serve(new_client, "192.168.1.107", 8855)

if __name__ == "__main__":
    evet_loop = asyncio.get_event_loop()
    evet_loop.run_until_complete(start_server())
    evet_loop.run_forever()
