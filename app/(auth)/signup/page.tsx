"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react/ssr";

export default function SignUp() {
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  return (
    <div className="min-h-screen max-w-md flex items-center justify-center mx-auto">
      <Card className="w-full border-border bg-background">
        <CardHeader className="items-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            Sign Up
          </CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div
              className={cn(
                "w-full gap-2 flex items-center",
                "justify-between flex-col"
              )}
            >
              <Button
                variant="outline"
                className={cn("w-full gap-2")}
                disabled={loadingGithub}
                onClick={async () => {
                  await signIn.social(
                    {
                      provider: "github",
                      callbackURL: "/workspace",
                    },
                    {
                      onRequest: () => {
                        setLoadingGithub(true);
                      },
                      onResponse: () => {
                        setLoadingGithub(false);
                      },
                    }
                  );
                }}
              >
                <GithubLogoIcon className="w-4 h-4" weight="duotone" />
                {loadingGithub ? "Signing up..." : "Sign up with Github"}
              </Button>
              <Button
                variant="outline"
                className={cn("w-full gap-2")}
                disabled={loadingGoogle}
                onClick={async () => {
                  await signIn.social(
                    {
                      provider: "google",
                      callbackURL: "/workspaces",
                    },
                    {
                      onRequest: () => {
                        setLoadingGoogle(true);
                      },
                      onResponse: () => {
                        setLoadingGoogle(false);
                      },
                    }
                  );
                }}
              >
                <GoogleLogoIcon className="w-4 h-4" weight="duotone" />
                {loadingGoogle ? "Signing up..." : "Sign up with Google"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
