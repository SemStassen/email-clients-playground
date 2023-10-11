export async function POST() {
  const sparkpostAPIKey = process.env.SPARKPOST_API_KEY;

  if (!sparkpostAPIKey) {
    throw new Error("Sparkpost API key not found");
  }

  const res = await fetch("https://api.eu.sparkpost.com/api/v1/transmissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: sparkpostAPIKey,
    },
    body: JSON.stringify({
      options: {
        click_tracking: false,
        transactional: true,
        inline_css: true,
      },
      description: "Scholing reminder",
      metadata: {
        user_type: "user",
        groups: "ICT",
      },
      substitution_data: {
        sender: "Landgraaf academy",
        course_name: "ICT in de toekomst",
      },
      recipients: [
        {
          address: {
            email: "semstassen@gmail.com",
            name: "Sem Stassen",
          },
          substitution_data: {
            course_date: "17-09-2023",
          },
        },
      ],
      content: {
        from: {
          name: "Landgraaf academy",
          email: "academie@mailing.enne.dev",
        },
        subject: "Scholing reminder",
        html: "<p>Hallo, {{name}}!, Dit is een reminder van {{sender}}. Je hebt {{course_name}} op {{course_date}}. Tot dan!</p>",
      },
    }),
  });
  console.log(res);

  return res;
}
