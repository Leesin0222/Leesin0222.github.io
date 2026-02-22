# 유백 (UBACK)

아티스트 유백(UBACK) 소개, 믹싱·마스터링, 앨범/굿즈 샵(계좌 이체 결제) 사이트.

## 로컬 설정

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **환경 변수**
   - `.env.example`을 복사해 `.env` 생성
   - Supabase 프로젝트에서 URL·anon key 입력
   - (선택) 입금 계좌: `VITE_BANK_NAME`, `VITE_BANK_ACCOUNT`, `VITE_BANK_HOLDER`

3. **Supabase 테이블**
   - [Supabase Dashboard](https://supabase.com/dashboard) → SQL Editor
   - `supabase/migrations/001_products_orders.sql` 내용 전체 실행

4. **실행**
   ```bash
   npm run dev
   ```

## 배포 (GitHub Pages)

- 저장소 Settings → Secrets and variables → Actions 에서 추가:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- `main` 브랜치 푸시 시 자동 빌드·배포

## 입금 확인 (판매자)

- Supabase Dashboard → Table Editor → `orders`
- 해당 주문의 `order_number`로 검색 후 입금 확인 시 `status`를 `pending` → `paid`로 수정
