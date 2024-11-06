interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  onSeeAll?: () => void;
  withoutPadding?: boolean;
}

export default function DashboardCard({
  title,
  children,
  onSeeAll,
  withoutPadding,
}: DashboardCardProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-primary-500 font-semibold">{title}</h2>
        {onSeeAll && (
          <button
            onClick={onSeeAll}
            className="text-base font-semibold text-primary-500 hover:text-primary-600"
          >
            See All
          </button>
        )}
      </div>
      {withoutPadding ? (
        <>{children}</>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm">{children}</div>
      )}
    </div>
  );
}
