import os
import sys
import logging
import asyncio
import subprocess
import threading
import time
from fastapi import FastAPI
import uvicorn

# Настройка логирования
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("http_wrapper")

# Создаем FastAPI приложение для прохождения Health Check хостинга
app = FastAPI()

@app.get("/")
@app.get("/health")
async def health():
    return {"status": "ok", "service": "chalama-wrapper"}

def run_bot():
    """Запуск основного файла бота"""
    try:
        logger.info("Запуск Telegram бота (bot.py)...")
        # Запускаем bot.py как подпроцесс
        process = subprocess.Popen([sys.executable, "bot.py"], stdout=sys.stdout, stderr=sys.stderr)
        process.wait()
    except Exception as e:
        logger.error(f"Ошибка при запуске бота: {e}")

if __name__ == "__main__":
    # 1. Запускаем бота в отдельном потоке
    bot_thread = threading.Thread(target=run_bot, daemon=True)
    bot_thread.start()
    
    # 2. Получаем порт из переменных окружения (обычно 5000 или 3000)
    port = int(os.getenv("PORT", "5000"))
    
    # 3. Запускаем HTTP сервер для хостинга
    logger.info(f"Запуск HTTP сервера на порту {port}...")
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")
