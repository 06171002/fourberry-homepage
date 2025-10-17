<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>
          한 발 앞선 IT 서비스로<br />
          고객의 경험과 가치를 우선합니다.
        </h1>
        <p class="hero-subtitle">making sweet and sour software</p>
      </div>
      <div class="scroll-indicator">
        <span>Scroll Down</span>
      </div>
    </section>

    <section class="content-section full-screen">
      <div class="content-wrapper">
        <h2>시스템 통합 및 유지보수 (SI/SM)</h2>
        <p class="section-description">
          다년간 축적된 경험과 기술력을 바탕으로 고객의 비즈니스 환경에 최적화된 시스템을<br />
          설계, 구축하고 안정적으로 운영하여 업무 효율을 극대화합니다.
        </p>
        <RouterLink to="/projects" class="details-button">자세히 보기</RouterLink>
      </div>
    </section>

    <section class="content-section solutions-section full-screen">
      <div class="content-wrapper">
        <h2>자체 개발 솔루션</h2>
        <p class="section-description">
          고객의 비즈니스에 새로운 가치를 더하는 포베리만의 기술력을 만나보세요.
        </p>
        <div class="solution-cards">
          <div class="card">
            <h3>베리패스 (Berry-Pass)</h3>
            <p>다양한 소셜 인증을 통한 통합 회원 관리(SSO) 솔루션</p>
          </div>
          <div class="card">
            <h3>베리마인 (Berry-Mine)</h3>
            <p>웹 정보 자동 수집 및 상호 작용을 위한 웹 자동화 솔루션</p>
          </div>
        </div>
        <RouterLink to="/solutions" class="details-button">자세히 보기</RouterLink>
      </div>
    </section>

    <section class="cta-section">
      <div class="content-wrapper">
        <h2>포베리와 함께<br />새로운 가치를 만들어보세요.</h2>
        <RouterLink to="/contact" class="contact-button">프로젝트 문의하기</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ============== 전체 스타일 ============== */
.homepage {
  width: 100%;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

/* ============== Hero 섹션 스타일 ============== */
.hero-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 배경 이미지 고정 효과 */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 이미지 어둡게 처리 */
}

.hero-content {
  position: relative; /* 오버레이 위에 보이도록 */
  z-index: 1;
}

.hero-logo {
  width: 150px;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* ============== 공통 콘텐츠 섹션 스타일 ============== */
.content-section {
  padding: 6rem 0;
}

.content-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
}

.details-button {
  display: inline-block;
  background-color: transparent;
  color: #007aff;
  border: 1px solid #007aff;
  border-radius: 8px;
  padding: 0.8rem 1.8rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.details-button:hover {
  background-color: #007aff;
  color: white;
}

/* ============== [추가] 꽉 찬 화면 섹션 스타일 ============== */
.full-screen {
  height: 100vh; /* 화면 높이를 100%로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 내용을 세로 중앙 정렬 */
  padding: 0; /* 기존 패딩을 제거하여 꽉 차게 만듦 */
}

/* ============== 솔루션 섹션 스타일 ============== */
.solutions-section {
  background-color: #f8f9fa; /* 배경색으로 구분 */
}

.solution-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 300px;
}

.card h3 {
  margin-bottom: 0.5rem;
}

/* ============== CTA 섹션 스타일 ============== */
.cta-section {
  background-color: #007aff;
  color: white;
  padding: 6rem 0;
}

.cta-section h2 {
  font-size: 2.2rem;
}

.contact-button {
  display: inline-block;
  background-color: white;
  color: #007aff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  transition: transform 0.2s ease;
}

.contact-button:hover {
  transform: scale(1.05);
}

/* ============== 반응형 스타일 ============== */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.2rem;
  }
  .solution-cards {
    flex-direction: column;
    align-items: center;
  }
  /* [추가] 모바일에서는 꽉 찬 화면 효과 해제 */
  .full-screen {
    height: auto;
    padding: 6rem 0;
  }
}
</style>
