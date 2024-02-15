import { NavBar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    // Изначально было h-full
    <div className="h-auto dark:bg-[#1F1F1F]">
      <NavBar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
}

export default MarketingLayout;