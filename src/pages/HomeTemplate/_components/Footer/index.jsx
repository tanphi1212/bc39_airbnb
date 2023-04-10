import React from 'react'

export default function Footer() {
    return (
        <footer className="p-6 bg-gray-100 text-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">GIỚI THIỆU</h2>
                    <div className="flex flex-col space-y-2 text-sm text-gray-600">
                        <a rel="noopener noreferrer" href="#">Phương thức hoạt động của Airbnb</a>
                        <a rel="noopener noreferrer" href="#">Trang tin tức</a>
                        <a rel="noopener noreferrer" href="#">Nhà đầu tư </a>
                        <a rel="noopener noreferrer" href="#">Airbnb Plus</a>
                        <a rel="noopener noreferrer" href="#">Airbnb Luxe</a>
                        <a rel="noopener noreferrer" href="#">HotelTonight</a>
                        <a rel="noopener noreferrer" href="#">Airbnb for Work</a>
                        <a rel="noopener noreferrer" href="#">Nhà có Host, mọi thứ điều có thể</a>
                        <a rel="noopener noreferrer" href="#">Cơ hội nghề nghiệp</a>
                        <a rel="noopener noreferrer" href="#">Thư của nhà sáng lập</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">CỘNG ĐỒNG</h2>
                    <div className="flex flex-col space-y-2 text-sm text-gray-600">
                        <a rel="noopener noreferrer" href="#">Sự đa dạng và Cảm giác thân thuộc</a>
                        <a rel="noopener noreferrer" href="#">Tiện nghi phù hợp cho người khuyết tật</a>
                        <a rel="noopener noreferrer" href="#">Đối tác liên kết Airbnb</a>
                        <a rel="noopener noreferrer" href="#">Chỗ ở cho tuyết đầu</a>
                        <a rel="noopener noreferrer" href="#">Lượt giới thiệu của khách</a>
                        <a rel="noopener noreferrer" href="#">Airbnb.org</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">ĐÓN TIẾP KHÁCH</h2>
                    <div className="flex flex-col space-y-2 text-sm text-gray-600">
                        <a rel="noopener noreferrer" href="#">Cho thuê nhà</a>
                        <a rel="noopener noreferrer" href="#">Tổ chức Trải nghiệm trực tuyến</a>
                        <a rel="noopener noreferrer" href="#">Tổ chức trải nghiệm</a>
                        <a rel="noopener noreferrer" href="#">Đón tiếp khách có trách nhiệm</a>
                        <a rel="noopener noreferrer" href="#">Trung tâm tài nguyên</a>
                        <a rel="noopener noreferrer" href="#">Trung tâm cộng đồng</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Hỗ Trợ</h2>
                    <div className="flex flex-col space-y-2 text-sm text-gray-600">
                        <a rel="noopener noreferrer" href="#">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                        <a rel="noopener noreferrer" href="#">Trung tâm trợ giúp</a>
                        <a rel="noopener noreferrer" href="#">Các tùy chọn hủy</a>
                        <a rel="noopener noreferrer" href="#">Hỗ trợ khu dân cư</a>
                        <a rel="noopener noreferrer" href="#">Tin cậy và an toàn</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="text-gray-600">© Copyright 2021. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
