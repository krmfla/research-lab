# Git

### 顯示、加入遠端儲存庫(repository)
```sh
$ git remote -v

origin https://github.com/user/repo.git (fetch)
origin https://github.com/user/repo.git (push)

$ git remote add upstream https://github.com/otheruser/repo.git
$ git remote -v

origin https://github.com/user/repo.git (fetch)
origin https://github.com/user/repo.git (push)
upstream https://github.com/otheruser/repo.git (fetch)
upstream https://github.com/otheruser/repo.git (push)
```
<br>

### 分支顯示、新增、切換與刪除
```sh
$ git branch

* master

$ git branch feature/test
$ git branch

  feature/test
* master
  
$ git checkout feature/test

Switched to branch 'develop'

$ git branch

* feature/test
  master
  
$ git branch -d feature/test
$ git branch -D feature/test (強制)

* master
```
<br>

### 刪除遠端儲存庫
```sh
$ git push origin --delete <branch_name>
```

<br>

### 同步遠端伺服器上的資料到本地
```sh
$ git fetch origin
$ git fetch upstream
```

```sh
$ git pull upstream master

# 不增加 merge 後的新節點 
$ git pull upstream master --rebase
```

> git pull = git fetch + merge to local

<br>

**rebase**
```sh
$ git rebase upstream/master

# 或

$ git rebase origin/master
```

### 提交檔案
```sh
$ git add <your_files>
$ git commit -m "COMMIT DESCRIPTION"
$ git push origin <branch_name>
```

用 rebase 後, 加上 ``-f`` 來強制 push
```sh
$ git push -f origin <branch_name>
```

<br>

### 查看歷史提交記錄
```sh
$ git log
```

<br>

### 刪除提交
```sh
$ git reset --hard HEAD~
$ git reset --hard HEAD~~
$ git reset --hard HEAD~3
```

### 將 HEAD 與遠端儲存庫對齊
(!!! 使用前請確認現有的 code 都已儲存)
```sh
$ git reset --hard upstream/master
```

<br />

### 同步遠端儲存庫後, 提交檔案
```sh
$ git checkout develop
$ git pull upstream master
$ git reset --hard upstream/master

$ git add <new_file>
$ git commit -m "COMMIT DESCRIPTION"
$ git push -f origin develop
```

### 從 Git Repository 復原特定檔案

```sh
$ git checkout <deleting_commit> <file_path>

# ex:
$ git checkout 150a9394f4a77ba40b3c54269dfb5ebe43c9053q js/app.js
```

### remove untracked files

show what will be deleted
```sh
git clean -n
```
Clean Step - beware: this will delete files:

delete files
```
git clean -f
```

## Generating a SSH key

checking is key exist
```sh
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
# id_dsa.pub
```

Generating a new SSH key

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 列出 config 資訊及修該

```sh
git config --list

git config [--global] user.name <username>
# --global 為修改全域資料, 不加 --global 則只對當層有效
```

### 其他用法

```sh
# 列出本地分支及對應的遠端追蹤分支
git branch -vv

# 將其他 branch 的 commit 加進來
git cherry-pick <commit>
```

### issue

**如何解決 failed to push some refs ?**
```sh
error: failed to push some refs to 'https://github.com/SOMETHING/SOMETHING.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**如何從 git repository 恢復特定檔案？**

### reference:

「你知道 Git 是怎麼一回事嗎」

http://kaochenlong.com/2017/08/11/git-on-modern-web/

在Github上同步Fork过来的Repository

https://blog.nex3z.com/2015/06/04/%E5%9C%A8github%E4%B8%8A%E5%90%8C%E6%AD%A5fork%E8%BF%87%E6%9D%A5%E7%9A%84repository/

Syncing a fork

https://help.github.com/articles/syncing-a-fork/

Configuring a remote for a fork

https://help.github.com/articles/configuring-a-remote-for-a-fork/
