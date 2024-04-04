import Link from "next/link";
import notFoundImage from "@/app/assets/images/404notfound.jpg";
import Image from "next/image";

export default function notFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>Lạc đường rồi. Vui lòng quay lại trang chủ</h2>
      <Image
        src={notFoundImage}
        alt="404 not found"
        style={{ maxWidth: "60%", height: "auto" }}
      />
      <div
        style={{
          marginTop: "16px",
          border: "1px solid #ccc",
          maxWidth: "fit-content",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "rgb(34 197 94)",
        }}
      >
        <Link style={{ textDecoration: "none", color: "#fff" }} href={"/"}>
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
