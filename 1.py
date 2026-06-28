import requests

# 這是從該網站解析出來的公開資料來源
url = "https://beyblade.phstudy.org/data/community.json"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

try:
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        print(f"成功抓取！總共取得 {len(data)} 筆店家與賽事基地資料。\n")
        
        # 示範：撈出前 3 筆資料的內容供你參考結構
        for item in data[:3]:
            name = item.get("name", "未知名稱")
            city = item.get("city", "未知縣市")
            # 這裡面通常還會包含一個 events 的列表，儲存該店家的比賽時間
            print(f"店名/場館：{name} ({city})")
            if "events" in item:
                print(f" -> 賽事資訊：{item['events']}")
            print("-" * 30)
    else:
        print(f"抓取失敗，伺服器回應狀態碼：{response.status_code}")
except Exception as e:
    print(f"連線發生錯誤：{e}")