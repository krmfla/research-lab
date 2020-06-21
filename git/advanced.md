## Git 退版與 conflict 處理

[slides](https://slides.com/krmfla/deck-11#/)

## 當有 conflict 時，如何強制讓檔案與 git server 上同步?

確定不理會 local 的 conflict 時, 想要直接蓋過去

## 無法 push

### 因暫存其他帳號, 導致找不到 Repository

```sh
remote: Repository not found.
fatal: repository 'https://github.com/krmfla/SOME_PROJECT.git/' not found
```

windows 搜尋認證管理員, windows 認證 > 一般認證 > git:https://github.com > 編輯或移除

[git报错remote: Repository not found的一种可能](https://www.jianshu.com/p/5eb3a91458de)
