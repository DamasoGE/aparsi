import { useEffect } from "react";
import { router } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  useEffect(() => {
    router.replace("/login");
  }, []);

  return <Text>Redirige</Text>
}