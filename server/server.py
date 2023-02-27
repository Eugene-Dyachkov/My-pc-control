import asyncio
import websockets

async def command_processing(comand: str):
    await print(comand)

async def new_client(client_socket, path):
    print("New client")
    while True:
        comand = await client_socket.recv()
        await command_processing(comand)

async def start_server():
    await websockets.serve(new_client, "localhost", 8855)

if __name__ == "__main__":
    evet_loop = asyncio.get_event_loop()
    evet_loop.run_until_complete(start_server())
    evet_loop.run_forever()
