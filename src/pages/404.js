import * as React from "react";
import Heading from "src/components/Heading";
import Button from "src/components/Button";
import Layout from "src/components/Layout";
import { PageContext } from "src/utils/context";

// markup
const NotFoundPage = () => {
  const location = { pathname: "/404/" };

  return (
    <PageContext.Provider
      value={{
        location: location,
      }}
    >
      <Layout>
        <main>
          <div className="mx-auto max-w-3xl text-center lg:my-48 my-24 px-6">
            <Heading
              className="text-darkblue mb-6 lg:!text-[90px] !text-6xl !leading-[0.8]"
              size="h1"
            >
              OOPS, THE PAGE YOU'RE LOOKING FOR CAN'T BE FOUND.
            </Heading>
            <p className="my-6 block tracking-[-0.05px] text-base">
              The page you're looking for couldn't be found. It might have been removed, renamed or it didn't exist in the first place.
            </p>
            <Button
              to={`/`}
              before="Back to homepage"
              className={`mt-4 bg-brightgreen hover:bg-brightgreenhover mr-3 before:content-[attr(before)]`}
            >
              Back to homepage
            </Button>
          </div>
        </main>
      </Layout>
    </PageContext.Provider>
  );
};

export default NotFoundPage;
