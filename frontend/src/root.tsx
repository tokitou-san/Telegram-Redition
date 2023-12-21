// @refresh reload
import { Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import { AuthProvider } from "./context/auth";
import "./root.css";
import { Toaster } from "solid-toast";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Telegram Web</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<AuthProvider>
							<Toaster />
							<Routes>
								<FileRoutes />
							</Routes>
						</AuthProvider>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
