import { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "flaura-website",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, "site", {
        path: ".",
        buildOutput: "out",
        buildCommand: "npm run build",
        customDomain: {
          domainName: "flaura.ai",
          domainAlias: "www.flaura.ai",
          hostedZone: "flaura.ai",
        },
        environment: {
          NODE_ENV: "production",
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
