import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"BROWSER ERROR: {err}"))
        
        try:
            await page.goto("http://localhost:5173", wait_until="networkidle")
            print("Page loaded successfully.")
        except Exception as e:
            print(f"Navigation error: {e}")
            
        await browser.close()

asyncio.run(main())
