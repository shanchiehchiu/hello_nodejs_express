# React + Node.js + Express 全端學習專案

這是一個完整的全端學習專案，包含：
- 前端：React + TypeScript
- 後端：Node.js + Express
- 資料傳輸：REST API

## 專案結構

```
hello_nodejs_express/
├── backend/          # Node.js + Express 後端
│   ├── server.js     # 主要後端伺服器檔案
│   ├── package.json  # 後端依賴配置
│   └── .env         # 環境變數
├── frontend/         # React 前端
│   ├── src/
│   │   ├── App.tsx   # 主要 React 組件
│   │   └── App.css   # 樣式檔案
│   └── package.json  # 前端依賴配置
└── README.md        # 專案說明
```

## 功能特色

### 後端 (Express)
- RESTful API 設計
- CORS 跨域支援
- 環境變數管理
- 熱重載 (nodemon)

### 前端 (React + TypeScript)
- 現代化 React Hooks
- TypeScript 類型安全
- Axios HTTP 客戶端
- 響應式設計

## 安裝與執行

### 1. 啟動後端服務

```bash
cd backend
npm install
npm run dev
```

後端將在 `http://localhost:5000` 運行

### 2. 啟動前端服務

```bash
cd frontend
npm install
npm start
```

前端將在 `http://localhost:3000` 運行

## API 端點

- `GET /` - 測試端點
- `GET /api/users` - 獲取用戶列表
- `POST /api/users` - 新增用戶

## 學習重點

1. **全端架構理解**
   - 前後端分離
   - API 設計原則
   - 跨域請求處理

2. **React 開發**
   - 函數組件與 Hooks
   - 狀態管理
   - 表單處理
   - HTTP 請求

3. **Node.js/Express 開發**
   - 路由設計
   - 中介軟體使用
   - 環境配置
   - 開發工具整合

4. **開發工具**
   - 熱重載開發
   - TypeScript 整合
   - npm 腳本管理

## 擴展建議

1. 添加資料庫（如 MongoDB 或 PostgreSQL）
2. 實現用戶認證與授權
3. 添加表單驗證
4. 實現錯誤處理
5. 添加測試覆蓋
6. 部署到雲端平台

## 常見問題

**Q: 前端無法連接後端？**
A: 確認後端服務已啟動在 5000 埠，並檢查 CORS 設置

**Q: 如何修改 API 端點？**
A: 在 `backend/server.js` 中添加新的路由

**Q: 如何添加新的 React 組件？**
A: 在 `frontend/src/` 目錄下創建新的 .tsx 檔案
