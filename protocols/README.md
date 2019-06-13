# SSH | 安全外殼協定

Secure Shell

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
