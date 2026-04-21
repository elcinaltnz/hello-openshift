# 🚀 OpenShift Hello App

Node.js ve Express ile yazılmış, Red Hat OpenShift üzerinde çalışan web uygulaması.

## 🌐 Canlı URL
https://hello-app-crt-25021-dev.apps.rm1.0a51.p1.openshiftapps.com

## 🛠 Kullanılan Teknolojiler
- Node.js & Express
- Red Hat OpenShift Sandbox
- S2I (Source-to-Image) Build sistemi

## 📁 Proje Yapısı
server.js → Web sunucusu
package.json → Bağımlılıklar
public/index.html → Web arayüzü
openshift-deploy.yaml → OpenShift ayarları

## 🚀 Deploy Adımları
1. GitHub reposuna kod yüklendi
2. OpenShift S2I ile otomatik build yapıldı
3. Pod oluşturuldu ve ayağa kaldırıldı
4. Route ile internet'e açıldı

## ⚡ Kullanılan Komutlar
oc new-app nodejs~https://github.com/elcinaltnz/hello-openshift.git --name=hello-app
oc logs -f buildconfig/hello-app
oc expose svc/hello-app
oc scale deployment/hello-app --replicas=3

## 👤 Geliştirici
elcinaltnz
