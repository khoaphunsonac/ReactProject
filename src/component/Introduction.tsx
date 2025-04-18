export default function Introduction() {
    return (
        <div className="container text-center py-4">
            <div className="bg-white bg-opacity-75 shadow rounded-3 p-4" style={{ backdropFilter: "blur(10px)" }}>
                <h1 className="text-primary">Chào mừng đến với trang Quản trị!</h1>
                <p className="fs-5 text-secondary">
                    Đây là trang quản trị nơi bạn có thể quản lý tất cả các chức năng của ứng dụng.
                </p>
                <p className="fs-6 text-dark">Các chức năng:</p>
                <ul className="list-unstyled text-start">
                    <li>1. Trang chủ: Liệt kê danh sách sinh viên và xem chi tiết với điểm trung bình và xếp loại.</li>
                    <li>2. Tìm kiếm theo từ khóa: Tìm sinh viên theo tên chứa từ khóa.</li>
                    <li>3. Tìm kiếm theo điểm trung bình: Tìm sinh viên có điểm trung bình trong khoảng giá trị.</li>
                    <li>4. Tìm kiếm theo giới tính: Tìm sinh viên theo giới tính.</li>
                </ul>
            </div>
        </div>
    );
}
