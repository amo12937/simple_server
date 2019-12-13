# simple web server

- 好きな `method`, `status`, `message` を指定するとなんか返ってくる感じのやつ
- セッションとかは無いです
- そのうちクッキーの中身とかも返したい

## 起動

```
npm install
npm start
```

## アクセス

### get

```
curl localhost:3000/req?foo=bar&hoge=fuga
```

### status 指定

```
curl localhost:3000/req/404?foo=bar&hoge=fuga
```

### response のmessage 指定

```
curl localhost:3000/req/200/fizzbuzz?foo=bar&hoge=fuga
```

### post, put, delete

```
curl -X POST -H "Content-Type: application/json" -d '{"foo": "bar", "hoge": "fuga"}' localhost:3000/req
curl -X PUT -H "Content-Type: application/json" -d '{"foo": "bar", "hoge": "fuga"}' localhost:3000/req
curl -X DELETE -H "Content-Type: application/json" -d '{"foo": "bar", "hoge": "fuga"}' localhost:3000/req
```
