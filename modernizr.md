# Modernizr

> Modernizr is a small piece of JavaScript code that automatically detects the availability of next-generation web technologies in your user's browsers. 
> Rather than blacklisting entire ranges of browsers based on “UA sniffing,” Modernizr uses feature detection to allow you to easily tailor your user's experiences based on the actual capabilities of their browser.

<br />

偵測瀏覽器是否支援 HTML5、CSS3、ES5、ES6等新特性

**特性：**
* 比起用 UserAgent 判斷， modernizr 透過特性偵測來做更準確的判斷
* 當不支援新功能時，採取替代方案或載入模擬補丁
* 依照實際需要，載入偵測工具，不需整包下載
* 讓舊瀏覽器也能支援新特性，從而提升使用者體驗

<br />

## 思考架構

### Modernizr 要解決什麼問題

- [x] Modernizr 文件在說什麼

  * 已讀

- [x] 實際開發上可能遇到的問題

  * 遇到瀏覽器不支援新特性時，用 userAgent 判斷
  
  * 或是直接捨棄。比如不支援漸層效果，而選擇統一作圖片
  
  * 維護成本, maintain

<br />
 
### 如何解決

- [x] 設計理念

  * feature detection
  
  * 用多少拿多少
  
  * 透過 css 自動區分是否支援
  
- [x] 如何使用

- [ ] 案例(故事)---可與如何使用結合
 
- [ ] 他的偵測邏輯是什麼？

- [ ] IE 11 的實作補丁

<br />

### 有什麼可能的應用

- [x] 公司實際專案的可能應用

  * webTV 相容性測試
  
  * 程式特性優化

<br />

### 工具的發展趨勢與展望

- [ ] 從活躍度去看他的發展脈絡

  * 從 github Contributions history, 去看瀏覽器發展脈絡
  
<br />

### 結論

