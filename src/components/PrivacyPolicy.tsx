import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
      <div className="space-y-4">
        <p>TicketHubは、お客様のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当社のサービス利用に関連して収集する情報と、その利用方法について説明します。</p>
        
        <h2 className="text-2xl font-semibold mt-4">1. 収集する情報</h2>
        <p>当社は、サービス提供のために以下の情報を収集することがあります：</p>
        <ul className="list-disc list-inside">
          <li>氏名、メールアドレス、電話番号などの個人情報</li>
          <li>購入履歴やサイトの利用状況などのサービス利用情報</li>
          <li>IPアドレスやクッキー情報などの技術的情報</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">2. 情報の利用目的</h2>
        <p>収集した情報は、以下の目的で利用します：</p>
        <ul className="list-disc list-inside">
          <li>チケットの販売とサービスの提供</li>
          <li>カスタマーサポートの提供</li>
          <li>サービスの改善と新機能の開発</li>
          <li>マーケティングや広告の配信（お客様の同意がある場合）</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">3. 情報の共有</h2>
        <p>当社は、お客様の個人情報を第三者と共有することはありません。ただし、以下の場合を除きます：</p>
        <ul className="list-disc list-inside">
          <li>法的な要請がある場合</li>
          <li>サービス提供に必要な範囲で業務委託先と共有する場合</li>
          <li>お客様の同意がある場合</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">4. セキュリティ</h2>
        <p>当社は、お客様の個人情報を適切に保護するため、セキュリティ対策を講じています。ただし、インターネット上での完全な安全性を保証することはできません。</p>

        <h2 className="text-2xl font-semibold mt-4">5. お問い合わせ</h2>
        <p>本プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします：</p>
        <p>メール：privacy@tickethub.example.com</p>

        <p className="mt-6">最終更新日：2024年4月1日</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;