function pushtable() {
  let tbodyData = [];

  $.ajax({
    url: "returnBooks.json", // JSON 파일의 경로 또는 URL
    dataType: "json",
    success: function (data) {
      // 요청이 성공하면 실행되는 콜백 함수
      // data 변수에 JSON 데이터가 저장됩니다.
      console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
      for (const iterator of data) {
        const returnDate = new Date(iterator.returnDate); // 반납 날짜를 Date 객체로 변환
        const today = new Date(); // 현재 날짜

        const timeDiff = today.getTime() - returnDate.getTime(); // 현재 날짜와 반납 날짜의 차이 계산
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 차이 일수 계산

        let overdueText = ""; // 연체 텍스트 초기화
        let color = ""; // 텍스트 색상 초기화
        if (dayDiff >= 14) {
          overdueText = ` 연체(${dayDiff}일)`; // 연체 텍스트 설정
          color = "red"; // 텍스트 색상을 빨간색으로 변경
        }

        tbodyData.push(`
                <tr>
                    <td>${iterator.bookId}</td>
                    <td><img id="bookImg" src="${iterator.picture}" alt="${iterator.title}"></td>
                    <td>${iterator.title}</td>
                    <td>${iterator.author}</td>
                    <td>${iterator.publisher}</td>
                    <td style = " color :${color};">${iterator.returnDate}${overdueText}</td>
                    <td>
                        <a href="#">
                          <img
                            id="cancle"
                            src="/assets/images/취소.png"
                            alt="취소"
                          />
                        </a>
                      </td>
                </tr>
            `);
      }
      document.querySelector(".retrunStack > tbody").innerHTML =
        tbodyData.join("");
    },
    error: function () {
      // 요청이 실패하면 실행되는 콜백 함수
      console.log("데이터를 불러올 수 없습니다.");
    },
  });
}

function returnBook1() {
  $.ajax({
    url: "returnedBooks.json", // JSON 파일의 경로 또는 URL
    dataType: "json",
    success: function (data) {
      // 요청이 성공하면 실행되는 콜백 함수
      // data 변수에 JSON 데이터가 저장됩니다.
      console.log(data); // 데이터를 콘솔에 출력하거나 원하는 작업을 수행합니다.
      let tbodyData = [];
      document.querySelector(".retrunStack > tbody").innerHTML =
        tbodyData.join("");
      for (const iterator of data) {
        tbodyData.push(`<tr>
                    <td>${iterator.bookId}</td>
                    <td>${iterator.title}</td>
                    <td>${iterator.author}</td>
                    <td>${iterator.returnDate}</td>
                    </tr>
                    `);
      }
      document.querySelector(".borrowStat > tbody").innerHTML =
        tbodyData.join("");
    },
    error: function () {
      // 요청이 실패하면 실행되는 콜백 함수
      console.log("데이터를 불러올 수 없습니다.");
    },
  });
}
