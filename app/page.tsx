import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Cpu, Battery, Shield, Smartphone, Zap } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Apple
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Tính năng</a>
            <a href="#specs" className="text-gray-700 hover:text-purple-600 transition-colors">Thông số</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Giá cả</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Mua ngay
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Mới ra mắt
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                iPhone 15 Pro
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trải nghiệm công nghệ tiên tiến nhất với chip A17 Pro, camera chuyên nghiệp và thiết kế titanium sang trọng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
                Đặt mua ngay
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Xem thêm
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 scale-75"></div>
            <Image
              src="/iphone-15-pro-purple-gradient.png"
              alt="iPhone 15 Pro"
              width={400}
              height={600}
              className="relative z-10 mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tính năng nổi bật
            </span>
          </h2>
          <p className="text-xl text-gray-600">Khám phá những công nghệ đột phá</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Chip A17 Pro</h3>
              <p className="text-gray-600">Hiệu năng vượt trội với chip 3nm tiên tiến nhất, xử lý mọi tác vụ một cách mượt mà.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Camera Pro 48MP</h3>
              <p className="text-gray-600">Hệ thống camera chuyên nghiệp với khả năng zoom quang học 5x và chế độ Action.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Pin cả ngày</h3>
              <p className="text-gray-600">Thời lượng pin lên đến 29 giờ phát video, đáp ứng mọi nhu cầu sử dụng.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Titanium</h3>
              <p className="text-gray-600">Thiết kế titanium cấp hàng không vũ trụ, nhẹ hơn và bền bỉ hơn bao giờ hết.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dynamic Island</h3>
              <p className="text-gray-600">Giao diện tương tác thông minh, hiển thị thông tin quan trọng một cách trực quan.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">USB-C</h3>
              <p className="text-gray-600">Kết nối USB-C tiện lợi với tốc độ truyền dữ liệu siêu nhanh lên đến 10Gb/s.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Thông số kỹ thuật
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Màn hình</span>
                <span className="text-gray-600">6.1" Super Retina XDR</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Chip</span>
                <span className="text-gray-600">A17 Pro</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Camera</span>
                <span className="text-gray-600">48MP + 12MP + 12MP</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Bộ nhớ</span>
                <span className="text-gray-600">128GB - 1TB</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Trọng lượng</span>
                <span className="text-gray-600">187g</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-purple-100">
                <span className="font-semibold text-gray-700">Chống nước</span>
                <span className="text-gray-600">IP68</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/iphone-specs-diagram.png"
                alt="iPhone Specs"
                width={300}
                height={500}
                className="mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chọn dung lượng phù hợp
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">128GB</h3>
              <p className="text-3xl font-bold text-purple-600 mb-6">28.999.000₫</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>Phù hợp sử dụng cơ bản</li>
                <li>Lưu trữ ảnh, video vừa phải</li>
                <li>Ứng dụng thiết yếu</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Chọn mua
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-300 shadow-lg scale-105 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
              Phổ biến
            </Badge>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">256GB</h3>
              <p className="text-3xl font-bold text-purple-600 mb-6">32.999.000₫</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>Dung lượng lý tưởng</li>
                <li>Lưu trữ nhiều ảnh, video</li>
                <li>Đa dạng ứng dụng</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Chọn mua
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">512GB</h3>
              <p className="text-3xl font-bold text-purple-600 mb-6">40.999.000₫</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>Dung lượng cao cấp</li>
                <li>Lưu trữ không giới hạn</li>
                <li>Chuyên nghiệp</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Chọn mua
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng trải nghiệm iPhone 15 Pro?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Đặt mua ngay hôm nay và nhận ưu đãi đặc biệt cùng giao hàng miễn phí toàn quốc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Đặt mua ngay
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mac</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Watch</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bảo hành</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sửa chữa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đối tác</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kết nối</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Apple Inc. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
