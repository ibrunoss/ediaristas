import Head from "next/head";

import SafeEnvironment from "ui/components/feddback/SafeEnvironment/SafeEnvironment";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
    </div>
  );
}
