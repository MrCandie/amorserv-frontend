import LoadingBar from "react-top-loading-bar";

export default function Loader({
  setProgress,
  progress,
}: {
  progress: number;
  setProgress: (e: number) => void;
}) {
  return (
    <LoadingBar
      color="#09203f"
      progress={progress}
      height={4}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}
