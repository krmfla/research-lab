# HTTP Status Code

### HTTP 狀態碼首位數字含義

狀態碼 |	含義             | 說明
----- | ---------------- | -----
1 開頭 | 訊息             | 請求被接受，需要繼續處理。用途為臨時回應
2 開頭 | 成功             | 請求成功被伺服器接收、理解、並接受
3 開頭 | 重定導向          | client 採取進一步的操作才能完成請求
4 開頭 | client 引起的錯誤 | client 錯誤導致 server 不能或不會處理請求
5 開頭 | server 引起的錯誤 | server 在處理請求的過程中發生錯誤或異常

### RESTful Web API 常用 HTTP 狀態碼

狀態碼 | 名稱 | 說明 | API 使用場景
--- | ----------------------| ------- | ----
200 | OK                    | 請求成功 | GET、PUT、PATCH 方法，取得資料
201 | Created               |	新的資源已建立	POST 方法，新增資料 |
204 | No Content            | 沒有返回任何內容	DELETE 方法，刪除資料 |
400 |	Bad Request           |	請求不正確	其它 4 開頭狀態碼沒有合適的，如參數錯誤 |
401 | Unauthorized          | 用戶需要認證 | 
403 | Forbidden             | 禁止訪問，與 401 回應不同的是，帳戶己認證，但沒有權限 | 
404 | Not Found             | 沒有找到指定的資源 | GET、PUT、PATCH、DELETE 方法，該資料不存在
500 | Internal Server Error | 伺服器發生錯誤 | 

reference:

[RESTful Web API 設計指南](https://www.footmark.info/programming-language/design/restful-webapi-design-guide/)
