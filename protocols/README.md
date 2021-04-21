# SSH | 安全外殼協定

> Secure Shell

一種加密的網路傳輸協定, 在網路中建立安全通道來實現SSH用戶端與伺服器之間的連接

### command

複製檔案與目錄

**scp** | Secure copy protocol 

scp `[帳號@來源主機]:來源檔案` `[帳號@目的主機]:目的檔案 `

```sh
# 從本地端複製到遠端
scp /path/file1 myuser@192.168.0.1:/path/file2

# 從遠端複製到本地端
scp myuser@192.168.0.1:/path/file2 /path/file1
```

## SSH 免密碼登入遠端主機 - 多主機 multiple ssh keys

### 多對一 Clients - Server 免密碼登入

```sh
 cat sourceS.pub >> .ssh/authorized_keys    # 將多個 Clients 的 public 都存放到同一個檔案 authorized_keys
```

reference: [SSH 免密碼登入遠端主機 - 多主機 multiple ssh keys](https://blog.xuite.net/tolarku/blog/300563924-SSH+%E5%85%8D%E5%AF%86%E7%A2%BC%E7%99%BB%E5%85%A5%E9%81%A0%E7%AB%AF%E4%B8%BB%E6%A9%9F+-+%E5%A4%9A%E4%B8%BB%E6%A9%9F+multiple+ssh+keys)



### 一台電腦配置多個SSH KEY，多個用戶身份

reference: [一台电脑配置多个SSH KEY，多个用户身份](https://segmentfault.com/a/1190000008462401)

<br />

# RSA

> RSA = 開發者字母組成

一種非對稱加密演算法, 用公鑰加密, 私鑰解密

<br />

# SSL | 傳輸層安全性協定

> Secure Sockets Layer

SSL 憑證是數位證書，用來驗證網站的身分並使用 SSL 技術將資料加密，然後傳送到伺服器

<br />

# HTTPS | 超文本傳輸安全協定

> Hypertext Transfer Protocol Secure

利用SSL/TLS來加密封包

## HTTP Request

### Content-type

**application/x-www-form-urlencoded**

`title=foo&message=bar`

**application/json**

```
{
 "title": "foo",
 "message": "bar"
}
```

**multipart/form-data**

用於上傳檔案
