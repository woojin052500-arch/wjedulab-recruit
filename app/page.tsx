import React from 'react';

export default function DesignerRecruitment() {
  return (
    <div className="min-h-screen bg-[#09090b] text-gray-100 font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6">
        <div className="inline-block bg-[#ccff00] text-black font-extrabold px-3 py-1 rounded-full text-sm mb-6 tracking-tight">
          🔥 굿즈 판매 수익 5% 쉐어
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
          WJedulab<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00ffcc]">
            로고 디자이너
          </span> 모집.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight break-keep">
          기획부터 개발, 배포까지 중2가 혼자 다 했습니다.<br className="hidden md:block" />
          이제 이 혁신적인 에듀테크에 '힙'을 불어넣어 줄 파트너를 찾습니다.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 space-y-8 pb-24">
        
        {/* Card 1: Our Portfolio */}
        <section className="bg-[#18181b] border border-[#27272a] rounded-3xl p-8 hover:border-[#ccff00] transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🚀 우리가 만든 진짜 결과물
          </h2>
          <p className="text-gray-400 mb-6 break-keep">
            어른들이 상상하는 뻔한 교육 말고, 진짜 10대가 10대를 위해 만듭니다. 아이디어만 있는 게 아니라 이미 라이브로 돌아가고 있습니다.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[#ccff00]">🔗</span>
              <a href="https://WJedulab.vercel.app" target="_blank" rel="noreferrer" className="text-lg hover:underline underline-offset-4">WJedulab 공식 웹</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ccff00]">🔗</span>
              <a href="https://Highschool-score.com" target="_blank" rel="noreferrer" className="text-lg hover:underline underline-offset-4">특목/자사고 입시 데이터 플랫폼</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ccff00]">🔗</span>
              <a href="https://ScoreWiki.vercel.app" target="_blank" rel="noreferrer" className="text-lg hover:underline underline-offset-4">ScoreWiki</a>
            </li>
          </ul>
        </section>

        {/* Card 2: What we want */}
        <section className="bg-[#18181b] border border-[#27272a] rounded-3xl p-8 hover:border-[#ccff00] transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-4">🎯 이런 스타일을 원해요</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl">❌</span>
              <p>전형적이고 딱딱한 학원/교육 로고는 절대 사절합니다.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p><strong>스투시(Stussy)나 나이키 스우시</strong>처럼 단순하면서도 뇌리에 강하게 박히는 <strong className="text-white">'스트릿 & 테크'</strong> 감성을 원합니다.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p>10대 학생들이 후드티나 노트북 스티커로 자랑스럽게 붙이고 다닐 수 있는 트렌디한 디자인!</p>
            </div>
          </div>
        </section>

        {/* Card 3: Benefits */}
        <section className="bg-gradient-to-br from-[#18181b] to-[#27272a] border border-[#ccff00]/50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">💡 합류 베네핏</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#09090b] p-5 rounded-2xl">
              <h3 className="text-xl font-bold text-[#ccff00] mb-2">수익 5% 평생 쉐어</h3>
              <p className="text-sm text-gray-400">추후 해당 로고로 브랜드 굿즈(후드티 등) 제작 및 판매 시, 판매 수익의 5%를 파트너로서 지속 지급합니다.</p>
            </div>
            <div className="bg-[#09090b] p-5 rounded-2xl">
              <h3 className="text-xl font-bold text-[#ccff00] mb-2">확실한 포트폴리오</h3>
              <p className="text-sm text-gray-400">디자인하신 로고는 WJedulab이 운영하는 국내 다수 웹서비스와 마케팅 채널에 즉시 전면 적용됩니다.</p>
            </div>
            <div className="bg-[#09090b] p-5 rounded-2xl md:col-span-2">
              <h3 className="text-xl font-bold text-[#ccff00] mb-2">유급 외주 1순위 제안</h3>
              <p className="text-sm text-gray-400">현재는 초기 포트폴리오/재능기부 형태지만, 서비스 규모 확장 시 디자인 리뉴얼 및 추가 작업에 대해 최우선적으로 유급 계약을 제안합니다.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center pt-12 pb-8">
          <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
            * 추후 브랜드 상표권 등록 및 상업적 이용(굿즈 제작 등), 2차 가공이 가능하도록 저작권 및 상업적 이용 양도에 동의하시는 분만 지원 부탁드립니다.
          </p>
          <a 
            href="https://instagram.com/wjedulab.official" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black font-extrabold text-lg px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-105"
          >
            포트폴리오 들고 인스타 DM 보내기 🚀
          </a>
        </section>
      </main>
    </div>
  );
}
