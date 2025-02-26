# PATIKA-STORE
Bu React Native bileşeni, bir e-ticaret mağazası uygulaması için temel bir yapı sağlar. İşlevselliğin kısa bir özeti:

    Mağaza Verisi (STORE dizisi):
        Başlık, resim URL'si, fiyat ve stok durumu gibi detaylarla birlikte sahte bir ürün listesi.

    StorePatika Bileşeni:
        Ana bileşen olarak mağazayı render eder.
        Ürünleri 2 sütunlu bir ızgara düzeninde görüntülemek için FlatList kullanılır.
        Her ürün, ürünün resmini, başlığını, fiyatını ve stok durumunu gösteren özel bir StoreView bileşenine iletilir.
        Ayrıca, ürünleri isimle filtrelemek için bir arama çubuğu (via TextInput) içerir.

    Stil (StyleSheet):
        Temiz ve modern bir arayüz sağlamak için temel stil kullanılır.
        PATIKASTORE başlığı, yeşil renk ve kalın yazı tipiyle öne çıkar.
        Arama giriş alanı, açık gri bir arka plan ve yuvarlatılmış köşelerle stillendirilmiştir.

    Render Etme (renderStoreItem):
        Her ürün, ürünün resmini, fiyatını, başlığını ve stok durumunu gösteren StoreView bileşeni kullanılarak render edilir.

    Düzen:
        FlatList bileşeni, ürünleri 2 sütunlu bir ızgarada görüntüler, bu da öğelerin temiz ve verimli bir şekilde gösterilmesini sağlar.
        Bu yapı, bir e-ticaret uygulamasının ürün görüntüleme ekranının temelini oluşturur.

Ekran Görüntüleri 📱
 ![Image](https://github.com/user-attachments/assets/ced67e84-1039-4d83-9f14-ad6feef4d097)
        
