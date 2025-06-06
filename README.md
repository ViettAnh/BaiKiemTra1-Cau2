# Ứng dụng Kiểm tra Số dư Token ERC20 trên Ronin Saigon

Ứng dụng CLI đơn giản giúp kiểm tra số dư token ERC20 trên mạng Ronin Saigon Testnet. Dự án này được thiết kế cho học sinh lớp 9-12 để học về blockchain và tương tác với smart contract.

## Tính năng

- Kết nối đến mạng Ronin Saigon Testnet
- Kiểm tra số dư token ERC20 của một địa chỉ ví
- Hiển thị số dư ở cả dạng nguyên và thập phân
- Giao diện dòng lệnh đơn giản, dễ sử dụng

## Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- npm (trình quản lý gói của Node.js)

## Cài đặt

1. Clone hoặc tải xuống dự án này
2. Mở terminal và di chuyển đến thư mục dự án
3. Cài đặt các gói phụ thuộc:

```bash
npm install
```

## Cách sử dụng

1. Chạy ứng dụng:

```bash
npm run start
```

2. Nhập thông tin theo hướng dẫn:
   - Địa chỉ ví (ví dụ: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e`)
   - Địa chỉ hợp đồng token ERC20 (ví dụ: `0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0`)

3. Ứng dụng sẽ hiển thị số dư token của địa chỉ ví đã nhập

## Giải thích mã nguồn

Ứng dụng sử dụng:
- **ethers.js**: Thư viện tương tác với blockchain Ethereum và các blockchain tương thích
- **prompt-sync**: Thư viện nhận input từ người dùng qua terminal

Các bước chính trong mã nguồn:
1. Kết nối đến mạng Ronin Saigon thông qua RPC
2. Nhận input địa chỉ ví và địa chỉ hợp đồng từ người dùng
3. Tạo đối tượng contract để tương tác với token ERC20
4. Gọi hàm `balanceOf()` để lấy số dư token
5. Chuyển đổi số dư từ dạng nguyên sang dạng thập phân dựa trên decimals của token
6. Hiển thị kết quả

## Lưu ý

- Đây là ứng dụng giáo dục, chỉ sử dụng trên mạng testnet
- Mạng Ronin Saigon là mạng thử nghiệm, không phải mạng chính thức
- Các token trên testnet không có giá trị thực

## Tài nguyên học tập thêm

- [Tài liệu về ethers.js](https://docs.ethers.io/)
- [Tiêu chuẩn ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [Ronin Blockchain](https://roninchain.com/)