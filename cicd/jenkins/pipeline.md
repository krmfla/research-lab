# pipeline

用 groovy 語言寫執行腳本

## groovy

Java 平台上的物件導向設計語言

### steps

`steps` 必須被放在 Stage section 裡執行，Steps 裡面每行命令都只可以是 Step，不可以是 Groovy Script。 譬如: `if (build) { }` , `def a`

<br />

### Declarative Pipeline 與 Scripted Pipeline 的差別

**Scripted Pipeline** 是原生的 Groovy Script，會在 Jenkins 裡面的 Groovy Shell 執行

**Declarative Pipeline** 透過 Pipeline Model Plugin 將 pipeline 裡面的 code 轉譯及建構出來

<br />

## 基本架構


```groovy
pipeline {
    agent any
    environment {
        DEPLOY_KEY = "123"
    }
    stages {
        stage('Initialize') {
            steps {
                sh "HANDLE INITIALIZE"
            }
        }
        stage('Build') {
            steps {
                sh "HANDLE BUILDING"
            }
        }
        stage('Deploy') {
            steps {
                script {
                    if (condtion) {
                        sh "TODO SOMTHING"
                    } else {
                        sh "TODO SOMTHING"
                    }
                }
                
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
```

**reference:**

精通 Jenkins Pipeline author: [c9s](https://medium.com/@c9s)

[精通 Jenkins Pipeline — part1 (Groovy 以及 Jenkinsfile)](https://medium.com/getamis/%E7%B2%BE%E9%80%9A-jenkins-pipeline-part1-e8ef48d3543e)

[精通 Jenkins Pipeline — part2 (Transform, Node Step 以及 Declarative Pipeline)](https://medium.com/@c9s/%E7%B2%BE%E9%80%9A-jenkins-pipeline-part2-transform-node-step-%E4%BB%A5%E5%8F%8A-declarative-pipeline-4942ddf67dd5)

[精通 Jenkins Pipeline — part3 (Declarative Pipeline and its implementation)
](https://medium.com/@c9s/%E7%B2%BE%E9%80%9A-jenkins-pipeline-part3-declarative-pipeline-and-its-implementation-20ee724a4a2a)
