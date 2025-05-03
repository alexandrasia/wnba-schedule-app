import Image from 'next/image'

export default function Page() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Image src="/basketball.jpg" alt="Basketball" width={100} height={100} />
      <h1>Hello, wnba-schedule-app!</h1>
    </div>
  );
    }