/* =============================================================
   נכסים — מקור נתונים יחיד. עדכון/הוספה/מחיקה כאן בלבד, בלי לגעת ב-HTML.
   Properties data — single source of truth. Edit here only.

   לכל נכס:
     area:  "lehavim" | "ramot" | "beersheva"   (לסינון)
     rooms: מספר חדרים (מספר)
     price: מחיר במספרים בלבד (לסינון "מחיר עד")
     tag:   "family" | "luxury"
     img:   כתובת תמונה (החליפו בתמונה אמיתית)
     title / specs: טקסט בשלוש שפות (he/en/fr)
   ============================================================= */
window.LISTINGS = [
  {
    area: "lehavim", rooms: 4, price: 2200000, tag: "family",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    title: { he: "דירת גן 4 חדרים", en: "4-room garden apartment", fr: "Appartement jardin 4 pièces" },
    specs: { he: "4 חד׳ · 110 מ״ר · גינה", en: "4 rooms · 110 m² · garden", fr: "4 pièces · 110 m² · jardin" }
  },
  {
    area: "ramot", rooms: 5, price: 3200000, tag: "luxury",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop",
    title: { he: "פנטהאוז עם מרפסת", en: "Penthouse with terrace", fr: "Penthouse avec terrasse" },
    specs: { he: "5 חד׳ · 160 מ״ר · נוף", en: "5 rooms · 160 m² · view", fr: "5 pièces · 160 m² · vue" }
  },
  {
    area: "beersheva", rooms: 6, price: 2800000, tag: "family",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    title: { he: "קוטג׳ 6 חדרים", en: "6-room cottage", fr: "Cottage 6 pièces" },
    specs: { he: "6 חד׳ · 180 מ״ר · 2 קומות", en: "6 rooms · 180 m² · 2 floors", fr: "6 pièces · 180 m² · 2 étages" }
  },
  {
    area: "lehavim", rooms: 6, price: 4200000, tag: "luxury",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    title: { he: "וילה 6 חדרים עם בריכה", en: "6-room villa with pool", fr: "Villa 6 pièces avec piscine" },
    specs: { he: "6 חד׳ · 260 מ״ר · בריכה", en: "6 rooms · 260 m² · pool", fr: "6 pièces · 260 m² · piscine" }
  },
  {
    area: "beersheva", rooms: 3, price: 1450000, tag: "family",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    title: { he: "דירת 3 חדרים מחודשת", en: "Renovated 3-room apartment", fr: "Appartement 3 pièces rénové" },
    specs: { he: "3 חד׳ · 78 מ״ר · מרפסת", en: "3 rooms · 78 m² · balcony", fr: "3 pièces · 78 m² · balcon" }
  },
  {
    area: "ramot", rooms: 4, price: 1950000, tag: "family",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    title: { he: "דירת 4 חדרים משופצת", en: "Renovated 4-room apartment", fr: "Appartement 4 pièces rénové" },
    specs: { he: "4 חד׳ · 105 מ״ר · חניה", en: "4 rooms · 105 m² · parking", fr: "4 pièces · 105 m² · parking" }
  }
];
