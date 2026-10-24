---
title: "欢迎使用 SaaSStarterKit"
description: "上线第一个 SaaS 流程之前，先完成应用配置。"
date: "2026-10-24"
category: "Getting started"
image: "/og.png"
published: true
---

## 从本地开始

按照仓库 README 安装依赖、应用本地 D1 迁移并启动开发服务。公开页面无需外部凭据即可预览；邮箱注册需要配置认证秘密与邮件供应商。

## 配置自己的产品

在 src/config/website.ts 和消息文件中修改品牌，替换本文与法律示例，只开启业务需要的服务。支付和 AI 默认关闭。

## 准备生产环境

测试与生产资源分别配置。上线前验证实际认证、邮件送达、支付 webhook、备份与监控。本地夹具不代表外部集成已通过验收。
