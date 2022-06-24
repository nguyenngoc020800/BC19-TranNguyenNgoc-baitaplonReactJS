project structure

-src

    - components
        + là những components nhận vào prop và hiện ra UI, được xử dụng nhiều lần trong ứng dụng
        + thường sẽ không xử lí logic
        + Button, Card, Modal, Header, Text,...
    -modules
        + nơi chứa nhưng cpn chính cho ứng dụng, sẽ có những xử lí logic như call API, xử lí nghiệp vụ.
        + Có thể là 1 page hoặc tập hợp 1 nhóm các chức năng
        -Home (module)
            - components: chỉ chứa các components sử dụng trực tiếp bên trong chính module này. Những components này có thể chứa các tác vụ logic: call API,...
            - pages: component sẽ hiển thị trực tiếp với mỗi router
    - apis/services
        + Setup thư viện gọi API (axios)
        + định nghĩa các function gọi API
