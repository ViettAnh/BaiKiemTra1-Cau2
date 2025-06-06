// ERC20 Balance Checker - Ứng dụng kiểm tra số dư token ERC20 trên mạng Ronin Saigon
// Dành cho học sinh lớp 9-12

import { ethers } from 'ethers';
import promptSync from 'prompt-sync';

// Khởi tạo prompt để nhận input từ người dùng
const prompt = promptSync({ sigint: true });

// ABI tối thiểu cho hàm balanceOf của token ERC20
const ERC20_ABI = [
  // Hàm balanceOf trả về số dư token của một địa chỉ
  'function balanceOf(address owner) view returns (uint256)',
  // Hàm decimals trả về số thập phân của token
  'function decimals() view returns (uint8)',
  // Hàm symbol trả về ký hiệu của token
  'function symbol() view returns (string)'
];

// URL của node RPC Ronin Saigon Testnet
const RPC_URL = 'https://saigon-testnet.roninchain.com/rpc';

/**
 * Hàm chính để kiểm tra số dư token ERC20
 */
async function checkERC20Balance() {
  console.log('===== KIỂM TRA SỐ DƯ TOKEN ERC20 TRÊN MẠNG RONIN SAIGON =====');
  console.log('Ứng dụng này giúp bạn kiểm tra số dư token ERC20 trên mạng Ronin Saigon Testnet');
  console.log('---------------------------------------------------------------');

  try {
    // Kết nối đến mạng Ronin Saigon thông qua RPC
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    
    // Kiểm tra kết nối
    try {
      const networkInfo = await provider.getNetwork();
      console.log(`Đã kết nối đến mạng: ${networkInfo.name} (chainId: ${networkInfo.chainId})`);
    } catch (error) {
      console.error('Không thể kết nối đến mạng Ronin Saigon. Vui lòng kiểm tra kết nối internet.');
      return;
    }

    // Nhập địa chỉ ví
    const walletAddress = prompt('Nhập địa chỉ ví (0x...): ');
    if (!walletAddress || !ethers.utils.isAddress(walletAddress)) {
      console.error('Địa chỉ ví không hợp lệ!');
      return;
    }

    // Nhập địa chỉ hợp đồng token ERC20
    const tokenAddress = prompt('Nhập địa chỉ hợp đồng token ERC20 (0x...): ');
    if (!tokenAddress || !ethers.utils.isAddress(tokenAddress)) {
      console.error('Địa chỉ hợp đồng không hợp lệ!');
      return;
    }

    // Tạo đối tượng contract để tương tác với token ERC20
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

    // Lấy thông tin về token
    const tokenSymbol = await tokenContract.symbol();
    const tokenDecimals = await tokenContract.decimals();

    // Lấy số dư token
    const balance = await tokenContract.balanceOf(walletAddress);

    // Chuyển đổi số dư từ wei sang đơn vị thập phân
    const formattedBalance = ethers.utils.formatUnits(balance, tokenDecimals);

    // Hiển thị kết quả
    console.log('\n===== KẾT QUẢ =====');
    console.log(`Địa chỉ ví: ${walletAddress}`);
    console.log(`Token: ${tokenSymbol} (${tokenAddress})`);
    console.log(`Số dư: ${formattedBalance} ${tokenSymbol}`);
    console.log(`Số dư (dạng nguyên): ${balance.toString()} (${tokenDecimals} số thập phân)`);

  } catch (error: unknown) {
    console.error('Đã xảy ra lỗi:', error instanceof Error ? error.message : error);
    console.log('Vui lòng kiểm tra lại thông tin và thử lại.');
  }
}

// Chạy hàm chính
checkERC20Balance().catch((error: unknown) => {
  console.error('Lỗi không xử lý được:', error instanceof Error ? error.message : error);
});

// Ví dụ sử dụng:
// Địa chỉ ví: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
// Địa chỉ hợp đồng ERC20: 0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0 (ví dụ)