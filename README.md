# Kimlik Doğrulama Uygulaması

Bu proje, kullanıcı kimlik doğrulama işlemleri için geliştirilmiş bir tam yığın web uygulamasıdır. React tabanlı frontend ve ASP.NET Core tabanlı backend ile SQL Server kullanılarak hazırlanmıştır. Kullanıcılar, kayıt olabilir ve giriş yapabilir.

## Kullanılan Teknolojiler

-   **Frontend**: React
-   **Backend**: ASP.NET Core
-   **Veritabanı**: SQL Server
-   **ORM**: Entity Framework Core
-   **JWT**: JSON Web Token (kimlik doğrulama ve yetkilendirme için)
-   **Paket Yöneticisi**: npm (frontend için)

----------

## Uygulama Hakkında

Bu web uygulaması, kullanıcıların kimlik doğrulama işlemlerini güvenli bir şekilde gerçekleştirmelerini sağlar. Kullanıcı kayıt, giriş ve yetkilendirme işlemleri modern bir arayüz ve güçlü bir API altyapısı ile desteklenir.

----------

## Temel Özellikler

-   **Kullanıcı Kaydı**: Yeni kullanıcılar için güvenli kayıt işlemi.
-   **Kullanıcı Girişi**: Geçerli kullanıcılar için JSON Web Token (JWT) ile güvenli oturum yönetimi.
-   **Oturum Yönetimi**: Kullanıcının oturumu sonlandırmasını kontrol etme.
-   **Hata Yönetimi**: Kayıt, giriş veya yetkilendirme işlemleri sonrası kullanıcı dostu hata ve başarı mesajları gösterilir.
-   **Responsive Tasarım**: Tüm cihazlar için optimize edilmiş kullanıcı arayüzü.

----------

## Kurulum ve Kullanım

### Gereksinimler

-   Node.js ve npm
-   .NET SDK
-   SQL Server

## Kurulum Talimatları

1. Visual Studio ile `ReactAuthApp.sln` dosyasını açın. 
2. `appsettings.json`  dosyasındaki bağlantı dizesini düzenleyerek SQL Server yapılandırmasını yapın.
3. `Araçlar Menüsünden -> Komut Satırı -> Geliştirici Komut İstemi` kısmına tıklayarak terminali açın. Sonrasında terminale `cd ReactAuthApp.Server` kodunu girerek backend klasörüne geçiş yapın ve ardından `dotnet ef database update` komutu ile veritabınını oluşturun.
4. Proje menüsünden projeyi derleyin, üst kısımdan hata ayıklama yönteminizi seçin ve projeyi başlatın.

