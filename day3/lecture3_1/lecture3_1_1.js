

// 3.노드 기능 알아보기
// 노드 모듈 시스템

const odd = '홀수입니다.';
const even = '짝수입니다';

// odd와 even을 다른 페이지에서 불러와서 쓰려면

// 불림을 당하는쪽도 허락을 해야함
// 모듈이 될 파일
module.exports = {
    odd,
    even,
}
// 같음
// export.odd = odd;
// export.even = even;